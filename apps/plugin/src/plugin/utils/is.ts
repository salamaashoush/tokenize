import { Ref, RefOrValue, Token, TokenTypes } from '../../types';

export function isColorToken(token: Token): token is TokenTypes['color'] {
  return token.type === 'color';
}

export function isBorderToken(token: Token): token is TokenTypes['border'] {
  return token.type === 'border';
}

export function isSpacingToken(token: Token): token is TokenTypes['spacing'] {
  return token.type === 'spacing';
}

export function isSizingToken(token: Token): token is TokenTypes['sizing'] {
  return token.type === 'sizing';
}

export function isFontWeightToken(token: Token): token is TokenTypes['fontWeight'] {
  return token.type === 'fontWeight';
}

export function isFontFamilyToken(token: Token): token is TokenTypes['fontFamily'] {
  return token.type === 'fontFamily';
}

export function isFontSizeToken(token: Token): token is TokenTypes['fontSize'] {
  return token.type === 'fontSize';
}

export function isLineHeightToken(token: Token): token is TokenTypes['lineHeight'] {
  return token.type === 'lineHeight';
}

export function isBorderWidthToken(token: Token): token is TokenTypes['borderWidth'] {
  return token.type === 'borderWidth';
}

export function isBorderRadiusToken(token: Token): token is TokenTypes['borderRadius'] {
  return token.type === 'borderRadius';
}

export function isBoxShadowToken(token: Token): token is TokenTypes['boxShadow'] {
  return token.type === 'boxShadow';
}

export function isLayerToken(token: Token): token is TokenTypes['layer'] {
  return token.type === 'layer';
}

export function isOpacityToken(token: Token): token is TokenTypes['opacity'] {
  return token.type === 'opacity';
}

export function isTextCaseToken(token: Token): token is TokenTypes['textCase'] {
  return token.type === 'textCase';
}

export function isTextDecorationToken(token: Token): token is TokenTypes['textDecoration'] {
  return token.type === 'textDecoration';
}

export function isDimensionToken(token: Token): token is TokenTypes['dimension'] {
  return token.type === 'dimension';
}

export function isTypographyToken(token: Token): token is TokenTypes['typography'] {
  return token.type === 'typography';
}

export function isOtherToken(token: Token): token is TokenTypes['other'] {
  return token.type === 'other';
}

export function isLetterSpacingToken(token: Token): token is TokenTypes['letterSpacing'] {
  return token.type === 'letterSpacing';
}

export function isCompositionToken(token: Token): token is TokenTypes['composition'] {
  return token.type === 'composition';
}

export function isComponentToken(token: Token): token is TokenTypes['component'] {
  return token.type === 'component';
}

export function isTextNode(node: SceneNode): node is TextNode {
  return node.type === 'TEXT';
}

export function isTokenReference(value: RefOrValue<unknown>): value is Ref<string> {
  return typeof value === 'string' && value.match(/(\$[^\s,]+\w)|({([^}]*)})/g) !== null;
}

export function isFontNeeded(token: Token): boolean {
  return (
    isFontWeightToken(token) ||
    isFontSizeToken(token) ||
    isLineHeightToken(token) ||
    isLetterSpacingToken(token) ||
    isTextCaseToken(token) ||
    isTextDecorationToken(token) ||
    isTypographyToken(token)
  );
}
