import {
  ChildrenStream,
  DataStream,
  PaperButtonModel,
  PaperButtonProps,
  PaperButtonPropsStream,
  PaperButtonSinks,
  PaperButtonSources,
  PaperButtonStyles,
  StylesStream,
} from './';
import { PaperMaterialSharedStyles, elevations } from '../../paper-material';
import { Stream, constant, just, map, merge, since, startWith } from 'most';
import { VNode, button } from '@motorcycle/dom';

import { combineObj } from 'most-combineobj';

export function PaperButton(sources: PaperButtonSources): PaperButtonSinks {
  const props$: PaperButtonPropsStream =
    map(
      (props: PaperButtonProps) => {
        return {
          raised: props.raised || false,
        };
      },
      sources.props$ || just({}),
    );

  const mouseDown$: Stream<Event> =
    sources.dom.select(PaperButtonStyles.host).events('mousedown');

  const mouseUp$: Stream<Event> =
    sources.dom.select(`document`).events('mouseup');

  const pressed$: Stream<boolean> =
    startWith(false, merge(
      constant(true, mouseDown$),
      constant(false, since(mouseDown$, mouseUp$)),
    ));

  const elevation$: Stream<number> =
    map(
      ({ props, pressed }: { props: PaperButtonProps, pressed: boolean }) => {
        if (!props.raised) return elevations.none;
        if (pressed) return elevations.four;
        return elevations.one;
      },
      combineObj({ props$, pressed$ }),
    );

  const styles$: StylesStream = sources.styles$ || just([]);

  const data$: DataStream = sources.data$ || just({});

  const children$: ChildrenStream = sources.children$;

  const model$ = combineObj({ styles$, data$, children$, elevation$ });

  const dom = map(view, model$);

  return { dom };
}

function view(model: PaperButtonModel): VNode {
  return button(
    PaperButtonStyles.host + `.animated` +
    PaperMaterialSharedStyles.host + `.elevation-${model.elevation}`,

    model.children,
  );
}
