/**
 * Formate une date ISO (format API) pour l'affichage.
 * Accepte: "2025-03-15", "2025-03-15T19:00:00.000Z", "2025-03-15T19:00:00"
 */

type FormatOptions = 'short' | 'long' | 'dateOnly';

export function formatDate(isoDate: string, options: FormatOptions = 'short'): string {
  const date = new Date(isoDate);

  if (Number.isNaN(date.getTime())) {
    return isoDate;
  }

  const locale = 'fr-FR';

  switch (options) {
    case 'dateOnly':
      return date.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    case 'long': {
      const hasTime = isoDate.includes('T');
      if (hasTime) {
        return date.toLocaleDateString(locale, {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });
      }
      return date.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    }
    case 'short':
    default:
      return date.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
  }
}
