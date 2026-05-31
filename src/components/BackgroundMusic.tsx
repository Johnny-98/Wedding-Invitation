import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Box, IconButton } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const MUSIC_SRC = '/music/weddingsong.mp3';

export function BackgroundMusic() {
  const { t } = useTranslation();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  const startPlayback = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return false;

    try {
      audio.muted = false;
      await audio.play();
      setIsPlaying(true);
      return true;
    } catch {
      setIsPlaying(false);
      return false;
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => {
      setIsPlaying(false);
      setHasEnded(true);
    };

    audio.addEventListener('ended', onEnded);
    return () => audio.removeEventListener('ended', onEnded);
  }, []);

  const togglePlayback = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    if (hasEnded) {
      audio.currentTime = 0;
      setHasEnded(false);
    }

    await startPlayback();
  }, [hasEnded, isPlaying, startPlayback]);

  const label = isPlaying ? t('music.pause') : t('music.play');

  return (
    <Box className="background-music">
      <audio ref={audioRef} src={MUSIC_SRC} preload="auto" />
      <IconButton
        className="background-music-button"
        onClick={() => void togglePlayback()}
        aria-label={`${t('music.label')}: ${label}`}
        size="small"
      >
        {isPlaying ? (
          <VolumeUpIcon fontSize="small" />
        ) : (
          <VolumeOffIcon fontSize="small" />
        )}
      </IconButton>
    </Box>
  );
}
