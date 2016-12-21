import { VNode, div } from '@motorcycle/dom';
import { PaperRippleStyles } from './styles';

export function view(rippleViews: Array<VNode>): VNode {
  return div(
    PaperRippleStyles.host,
    [
      div(
        PaperRippleStyles.background,
      ),
      div(
        PaperRippleStyles.waves,
        rippleViews,
      ),
    ],
  );
}
