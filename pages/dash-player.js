import { useEffect, useRef } from 'react'

function DashPlayer() {
  const audio = useRef(null)

  useEffect(() => {
    if (!audio.current) {
      return
    }
    import('dashjs').then(dash => {
      const player = dash.MediaPlayer().create()
      player.initialize(
        audio.current,
        'https://livesim.dashif.org/dash/vod/testpic_2s/audio.mpd',
        true,
      )
    })
  }, [audio])

  return <audio id="player" ref={audio} controls="audio"></audio>
}

export default DashPlayer
