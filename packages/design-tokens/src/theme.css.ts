import { createGlobalTheme } from '@vanilla-extract/css';
const fontFamily = {
  main: 'Inter, sans-serif',
};

const fontSize = {
  ui11: '11px',
  ui12: ' 12px',
  ui13: '13px',
  ui14: '14px',
};

const fontWeight = {
  regular: '400',
  medium: '500',
  bold: '600',
};

const lineHeight = {
  sm: '16px',
  lg: '24px',
};

const letterSpacing = {
  ui11: '.005em',
  ui11Neg: '.01em',
  ui12: '0',
  ui12Neg: '.005em',
  ui13: '-.0025em',
  ui13Neg: '.0025em',
  ui14: '-0.006em',
  ui14Neg: '-.001em',
};

export const theme = createGlobalTheme('body', {
  color: {
    transparent: 'transparent',
    current: 'currentColor',
    bg: 'var(--figma-color-bg)',
    bgHover: 'var(--figma-color-bg-hover)',
    bgPressed: 'var(--figma-color-bg-pressed)',
    bgSecondary: 'var(--figma-color-bg-secondary)',
    bgTertiary: 'var(--figma-color-bg-tertiary)',
    bgBrand: 'var(--figma-color-bg-brand)',
    bgBrandHover: 'var(--figma-color-bg-brand-hover)',
    bgBrandPressed: 'var(--figma-color-bg-brand-pressed)',
    bgBrandSecondary: 'var(--figma-color-bg-brand-secondary)',
    bgBrandTertiary: 'var(--figma-color-bg-brand-tertiary)',
    bgSelected: 'var(--figma-color-bg-selected)',
    bgSelectedHover: 'var(--figma-color-bg-selected-hover)',
    bgSelectedPressed: 'var(--figma-color-bg-selected-pressed)',
    bgSelectedStrong: 'var(--figma-color-bg-selected-strong)',
    bgSelectedSecondary: 'var(--figma-color-bg-selected-secondary)',
    bgSelectedTertiary: 'var(--figma-color-bg-selected-tertiary)',
    bgDisabled: 'var(--figma-color-bg-disabled)',
    bgDisabledSecondary: 'var(--figma-color-bg-disabled-secondary)',
    bgComponent: 'var(--figma-color-bg-component)',
    bgComponentHover: 'var(--figma-color-bg-component-hover)',
    bgComponentPressed: 'var(--figma-color-bg-component-pressed)',
    bgComponentSecondary: 'var(--figma-color-bg-component-secondary)',
    bgComponentTertiary: 'var(--figma-color-bg-component-tertiary)',
    bgDanger: 'var(--figma-color-bg-danger)',
    bgDangerHover: 'var(--figma-color-bg-danger-hover)',
    bgDangerPressed: 'var(--figma-color-bg-danger-pressed)',
    bgDangerSecondary: 'var(--figma-color-bg-danger-secondary)',
    bgDangerTertiary: 'var(--figma-color-bg-danger-tertiary)',
    bgWarning: 'var(--figma-color-bg-warning)',
    bgWarningHover: 'var(--figma-color-bg-warning-hover)',
    bgWarningPressed: 'var(--figma-color-bg-warning-pressed)',
    bgWarningSecondary: 'var(--figma-color-bg-warning-secondary)',
    bgWarningTertiary: 'var(--figma-color-bg-warning-tertiary)',
    bgSuccess: 'var(--figma-color-bg-success)',
    bgSuccessHover: 'var(--figma-color-bg-success-hover)',
    bgSuccessPressed: 'var(--figma-color-bg-success-pressed)',
    bgSuccessSecondary: 'var(--figma-color-bg-success-secondary)',
    bgSuccessTertiary: 'var(--figma-color-bg-success-tertiary)',
    bgInverse: 'var(--figma-color-bg-inverse)',
    bgOnselected: 'var(--figma-color-bg-onselected)',
    bgOnselectedHover: 'var(--figma-color-bg-onselected-hover)',
    bgOnselectedPressed: 'var(--figma-color-bg-onselected-pressed)',
    text: 'var(--figma-color-text)',
    textHover: 'var(--figma-color-text-hover)',
    textSecondary: 'var(--figma-color-text-secondary)',
    textSecondaryHover: 'var(--figma-color-text-secondary-hover)',
    textTertiary: 'var(--figma-color-text-tertiary)',
    textTertiaryHover: 'var(--figma-color-text-tertiary-hover)',
    textBrand: 'var(--figma-color-text-brand)',
    textBrandSecondary: 'var(--figma-color-text-brand-secondary)',
    textBrandTertiary: 'var(--figma-color-text-brand-tertiary)',
    textSelected: 'var(--figma-color-text-selected)',
    textSelectedSecondary: 'var(--figma-color-text-selected-secondary)',
    textSelectedTertiary: 'var(--figma-color-text-selected-tertiary)',
    textDisabled: 'var(--figma-color-text-disabled)',
    textComponent: 'var(--figma-color-text-component)',
    textComponentPressed: 'var(--figma-color-text-component-pressed)',
    textComponentSecondary: 'var(--figma-color-text-component-secondary)',
    textComponentTertiary: 'var(--figma-color-text-component-tertiary)',
    textDanger: 'var(--figma-color-text-danger)',
    textDangerSecondary: 'var(--figma-color-text-danger-secondary)',
    textDangerTertiary: 'var(--figma-color-text-danger-tertiary)',
    textWarning: 'var(--figma-color-text-warning)',
    textWarningSecondary: 'var(--figma-color-text-warning-secondary)',
    textWarningTertiary: 'var(--figma-color-text-warning-tertiary)',
    textSuccess: 'var(--figma-color-text-success)',
    textSuccessSecondary: 'var(--figma-color-text-success-secondary)',
    textSuccessTertiary: 'var(--figma-color-text-success-tertiary)',
    textOnbrand: 'var(--figma-color-text-onbrand)',
    textOnbrandSecondary: 'var(--figma-color-text-onbrand-secondary)',
    textOnbrandTertiary: 'var(--figma-color-text-onbrand-tertiary)',
    textOnselected: 'var(--figma-color-text-onselected)',
    textOnselectedStrong: 'var(--figma-color-text-onselected-strong)',
    textOnselectedSecondary: 'var(--figma-color-text-onselected-secondary)',
    textOnselectedTertiary: 'var(--figma-color-text-onselected-tertiary)',
    textOndisabled: 'var(--figma-color-text-ondisabled)',
    textOncomponent: 'var(--figma-color-text-oncomponent)',
    textOncomponentSecondary: 'var(--figma-color-text-oncomponent-secondary)',
    textOncomponentTertiary: 'var(--figma-color-text-oncomponent-tertiary)',
    textOndanger: 'var(--figma-color-text-ondanger)',
    textOndangerSecondary: 'var(--figma-color-text-ondanger-secondary)',
    textOndangerTertiary: 'var(--figma-color-text-ondanger-tertiary)',
    textOnwarning: 'var(--figma-color-text-onwarning)',
    textOnwarningSecondary: 'var(--figma-color-text-onwarning-secondary)',
    textOnwarningTertiary: 'var(--figma-color-text-onwarning-tertiary)',
    textOnsuccess: 'var(--figma-color-text-onsuccess)',
    textOnsuccessSecondary: 'var(--figma-color-text-onsuccess-secondary)',
    textOnsuccessTertiary: 'var(--figma-color-text-onsuccess-tertiary)',
    textOninverse: 'var(--figma-color-text-oninverse)',
    icon: 'var(--figma-color-icon)',
    iconHover: 'var(--figma-color-icon-hover)',
    iconPressed: 'var(--figma-color-icon-pressed)',
    iconSecondary: 'var(--figma-color-icon-secondary)',
    iconSecondaryHover: 'var(--figma-color-icon-secondary-hover)',
    iconTertiary: 'var(--figma-color-icon-tertiary)',
    iconTertiaryHover: 'var(--figma-color-icon-tertiary-hover)',
    iconBrand: 'var(--figma-color-icon-brand)',
    iconBrandPressed: 'var(--figma-color-icon-brand-pressed)',
    iconBrandSecondary: 'var(--figma-color-icon-brand-secondary)',
    iconBrandTertiary: 'var(--figma-color-icon-brand-tertiary)',
    iconSelected: 'var(--figma-color-icon-selected)',
    iconSelectedSecondary: 'var(--figma-color-icon-selected-secondary)',
    iconSelectedTertiary: 'var(--figma-color-icon-selected-tertiary)',
    iconDisabled: 'var(--figma-color-icon-disabled)',
    iconComponent: 'var(--figma-color-icon-component)',
    iconComponentPressed: 'var(--figma-color-icon-component-pressed)',
    iconComponentSecondary: 'var(--figma-color-icon-component-secondary)',
    iconComponentTertiary: 'var(--figma-color-icon-component-tertiary)',
    iconDanger: 'var(--figma-color-icon-danger)',
    iconDangerHover: 'var(--figma-color-icon-danger-hover)',
    iconDangerPressed: 'var(--figma-color-icon-danger-pressed)',
    iconDangerSecondary: 'var(--figma-color-icon-danger-secondary)',
    iconDangerSecondaryHover: 'var(--figma-color-icon-danger-secondary-hover)',
    iconDangerTertiary: 'var(--figma-color-icon-danger-tertiary)',
    iconWarning: 'var(--figma-color-icon-warning)',
    iconWarningPressed: 'var(--figma-color-icon-warning-pressed)',
    iconWarningSecondary: 'var(--figma-color-icon-warning-secondary)',
    iconWarningTertiary: 'var(--figma-color-icon-warning-tertiary)',
    iconSuccess: 'var(--figma-color-icon-success)',
    iconSuccessPressed: 'var(--figma-color-icon-success-pressed)',
    iconSuccessSecondary: 'var(--figma-color-icon-success-secondary)',
    iconSuccessTertiary: 'var(--figma-color-icon-success-tertiary)',
    iconOnbrand: 'var(--figma-color-icon-onbrand)',
    iconOnbrandSecondary: 'var(--figma-color-icon-onbrand-secondary)',
    iconOnbrandTertiary: 'var(--figma-color-icon-onbrand-tertiary)',
    iconOnselected: 'var(--figma-color-icon-onselected)',
    iconOnselectedStrong: 'var(--figma-color-icon-onselected-strong)',
    iconOnselectedSecondary: 'var(--figma-color-icon-onselected-secondary)',
    iconOnselectedTertiary: 'var(--figma-color-icon-onselected-tertiary)',
    iconOndisabled: 'var(--figma-color-icon-ondisabled)',
    iconOncomponent: 'var(--figma-color-icon-oncomponent)',
    iconOncomponentSecondary: 'var(--figma-color-icon-oncomponent-secondary)',
    iconOncomponentTertiary: 'var(--figma-color-icon-oncomponent-tertiary)',
    iconOndanger: 'var(--figma-color-icon-ondanger)',
    iconOndangerSecondary: 'var(--figma-color-icon-ondanger-secondary)',
    iconOndangerTertiary: 'var(--figma-color-icon-ondanger-tertiary)',
    iconOnwarning: 'var(--figma-color-icon-onwarning)',
    iconOnwarningSecondary: 'var(--figma-color-icon-onwarning-secondary)',
    iconOnwarningTertiary: 'var(--figma-color-icon-onwarning-tertiary)',
    iconOnsuccess: 'var(--figma-color-icon-onsuccess)',
    iconOnsuccessSecondary: 'var(--figma-color-icon-onsuccess-secondary)',
    iconOnsuccessTertiary: 'var(--figma-color-icon-onsuccess-tertiary)',
    iconOninverse: 'var(--figma-color-icon-oninverse)',
    border: 'var(--figma-color-border)',
    borderStrong: 'var(--figma-color-border-strong)',
    borderBrand: 'var(--figma-color-border-brand)',
    borderBrandStrong: 'var(--figma-color-border-brand-strong)',
    borderSelected: 'var(--figma-color-border-selected)',
    borderSelectedStrong: 'var(--figma-color-border-selected-strong)',
    borderDisabled: 'var(--figma-color-border-disabled)',
    borderDisabledStrong: 'var(--figma-color-border-disabled-strong)',
    borderComponent: 'var(--figma-color-border-component)',
    borderComponentHover: 'var(--figma-color-border-component-hover)',
    borderComponentStrong: 'var(--figma-color-border-component-strong)',
    borderDanger: 'var(--figma-color-border-danger)',
    borderDangerStrong: 'var(--figma-color-border-danger-strong)',
    borderWarning: 'var(--figma-color-border-warning)',
    borderWarningStrong: 'var(--figma-color-border-warning-strong)',
    borderSuccess: 'var(--figma-color-border-success)',
    borderSuccessStrong: 'var(--figma-color-border-success-strong)',
    borderOnbrand: 'var(--figma-color-border-onbrand)',
    borderOnbrandStrong: 'var(--figma-color-border-onbrand-strong)',
    borderOnselected: 'var(--figma-color-border-onselected)',
    borderOnselectedStrong: 'var(--figma-color-border-onselected-strong)',
    borderOncomponent: 'var(--figma-color-border-oncomponent)',
    borderOncomponentStrong: 'var(--figma-color-border-oncomponent-strong)',
    borderOndanger: 'var(--figma-color-border-ondanger)',
    borderOndangerStrong: 'var(--figma-color-border-ondanger-strong)',
    borderOnwarning: 'var(--figma-color-border-onwarning)',
    borderOnwarningStrong: 'var(--figma-color-border-onwarning-strong)',
    borderOnsuccess: 'var(--figma-color-border-onsuccess)',
    borderOnsuccessStrong: 'var(--figma-color-border-onsuccess-strong)',
  },
  borderRadius: {
    sm: '2px',
    med: '5px',
    large: '6px',
  },
  shadows: {
    hud: '0 5px 17px rgba(0, 0, 0, .2), 0 2px 7px rgba(0, 0, 0, .15)',
    floatingWindow: '0 2px 14px rgba(0, 0, 0, .15)',
  },
  spacing: {
    xxxs: '4px',
    xxs: '8px',
    xs: '16px',
    sm: '24px',
    md: '32px',
    lg: '40px',
    xl: '48px',
    xxl: '64px',
    xxxl: '80px',
  },
  sizing: {
    xxxs: '4px',
    xxs: '8px',
    xs: '16px',
    sm: '24px',
    md: '32px',
    lg: '40px',
    xl: '48px',
    xxl: '64px',
    xxxl: '80px',
  },
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
});
