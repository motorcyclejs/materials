import {
  Children,
  ChildrenStream,
  DataStream,
  EventStream,
  StylesStream,
  ViewStream,
} from '../../types';
import { DomSource, VNode, button, events, query } from '@motorcycle/dom';
import {
  PaperButtonModel,
  PaperButtonProps,
  PaperButtonPropsStream,
  PaperButtonSinks,
  PaperButtonSources,
  PaperButtonStyles,
} from './';
import { PaperMaterialSharedStyles, elevations } from '../../paper-material';
import { PaperRipple, PaperRippleSinks } from '../../paper-ripple';
import {
  Stream,
  combineArray,
  constant,
  filter,
  just,
  map,
  merge,
  since,
  startWith,
} from 'most';

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

  const { dom } = sources;

  const button: DomSource = query(PaperButtonStyles.host, dom);

  const mouseDown$: EventStream = events('mousedown', button);

  const touchStart$: EventStream = events('touchstart', button);

  const start$: EventStream = merge(mouseDown$, touchStart$);

  const document: DomSource = query(`document`, dom);

  const mouseUp$: EventStream = events('mouseup', document);

  const touchEnd$: EventStream = events('touchend', document);

  const end$: EventStream = merge(mouseUp$, touchEnd$);

  const down$: Stream<boolean> = constant(true, start$);

  const up$: Stream<boolean> = constant(false, since(start$, end$));

  const pressed$: Stream<boolean> = startWith(false, merge(down$, up$));

  const raised$: Stream<boolean> =
    map(
      (props: PaperButtonProps): boolean => props.raised as boolean,
      props$,
    );

  const raisedElevation$: Stream<number> =
    merge(
      constant(elevations.none, filter(Boolean, map(x => !x, raised$))),
      constant(elevations.one, filter(Boolean, raised$)),
    );

  const pressedElevation$: Stream<number> =
    merge(
      constant(elevations.one, filter(Boolean, map(x => !x, pressed$))),
      constant(elevations.four, filter(Boolean, pressed$)),
    );

  const elevation$: Stream<number> =
    combineArray(
    (raised: number, pressed: number) => raised * pressed,
      [ raisedElevation$, pressedElevation$ ],
    );

  const paperRippleView$: ViewStream = PaperRipple(sources).dom

  const styles$: StylesStream = sources.styles$ || just([]);

  const data$: DataStream = sources.data$ || just({});

  const children$: ChildrenStream =
    combineArray(
      (children, paperRippleView): Children => children.concat(paperRippleView),
      [ sources.children$, paperRippleView$ ],
    );

  const model$ = combineObj({ styles$, data$, children$, elevation$ });

  const view$: ViewStream = map(view, model$);

  return { dom: view$ };
}

function view(model: PaperButtonModel): VNode {
  return button(
    PaperButtonStyles.host + `.animated` +
    PaperMaterialSharedStyles.host + `.elevation-${model.elevation}`,

    model.children,
  );
}
