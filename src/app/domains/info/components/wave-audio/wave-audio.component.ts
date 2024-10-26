import { Component, ElementRef, Input, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import WaveSurfer from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {
  @Input({required: true}) audioUrl!: string 
  @ViewChild('wave') container!: ElementRef
  private ws!: WaveSurfer
  isPlayIng = signal(false)

  ngAfterViewInit() {
    this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    })
    this.ws.on('play', () => this.isPlayIng.set(true))
    this.ws.on('pause', () => this.isPlayIng.set(false))
  }

  playPause() {
    this.ws.playPause()
  }
}
