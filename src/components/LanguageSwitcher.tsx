import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const isBulgarian = i18n.language.startsWith('bg');
  const targetLanguageKey = isBulgarian
    ? 'language.switchToEnglish'
    : 'language.switchToBulgarian';
  const targetLabel = t(targetLanguageKey);

  const switchLanguage = () => {
    void i18n.changeLanguage(isBulgarian ? 'en' : 'bg');
  };

  return (
    <Box className="language-switcher">
      <Button
        className="language-switcher-button"
        onClick={switchLanguage}
        aria-label={`${t('language.label')}: ${targetLabel}`}
      >
        {targetLabel}
      </Button>
    </Box>
  );
}
