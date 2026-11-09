// Web Audio API ambient sound simulator for Hanoi alley ambiance (gentle wind, tea stall bell, warm acoustic resonance)
class SoundAmbiance {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private oscillatorNodes: OscillatorNode[] = [];
  private gainNode: GainNode | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  private start() {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.04, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);

      // Warm acoustic resonance simulating distant calm village breeze and singing bowls
      const freqs = [174, 216, 285];
      freqs.forEach((freq) => {
        if (!this.ctx || !this.gainNode) return;
        const osc = this.ctx.createOscillator();
        const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        if (panner) {
          osc.connect(panner);
          panner.connect(this.gainNode);
        } else {
          osc.connect(this.gainNode);
        }
        osc.start();
        this.oscillatorNodes.push(osc);
      });

      this.isPlaying = true;
    } catch (e) {
      console.warn('Web Audio could not start:', e);
      this.isPlaying = false;
    }
  }

  private stop() {
    try {
      this.oscillatorNodes.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore
        }
      });
      this.oscillatorNodes = [];
      if (this.ctx) {
        this.ctx.close();
        this.ctx = null;
      }
    } catch {
      // ignore
    }
    this.isPlaying = false;
  }

  public playChime() {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(528, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1056, ctx.currentTime + 0.3);

      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch {
      // ignore
    }
  }
}

export const soundAmbiance = new SoundAmbiance();
