import { Stream, just, combineArray } from 'most';
import { DomSource, VNode, VirtualNode, div } from '@motorcycle/dom';
import { Button } from '../../../src/components';

export interface ButtonsSources {
  dom: DomSource;
}

export function Buttons(sources: ButtonsSources) {
  const dom =
    combineDoms([
      RaisedButton(sources),
      spacer(),
      FlatButton(sources),
      spacer(),
      SecondaryButton(sources),
      spacer(),
      AccentButton(sources),
      spacer(),
      RedButton(sources),
      spacer(),
      GreenButton(sources),
      spacer(),
      YellowButton(sources),
      spacer(),
      BlueButton(sources),
      spacer(),
    ]);

  return { dom };
}

function spacer() {
  return {
    dom: just(div({ style: { margin: '2em' } })),
  };
}

function combineDoms(componentArray: Array<{ dom: Stream<VNode> }>): Stream<VNode> {
  return combineArray((...children) => div('.buttons', children), componentArray.map(c => c.dom));
}

const RaisedButton = (sources: { dom: DomSource }) =>
  Button({...sources, children$: just(['Raised']) });

const FlatButton = (sources: { dom: DomSource }) =>
  Button({ ...sources, styles$: just([Button.flat]) , children$: just(['Flat'])});

const SecondaryButton = (sources: { dom: DomSource }) =>
  Button({ ...sources, styles$: just([Button.raised, Button.secondary]) , children$: just(['Secondary'])});

const AccentButton = (sources: { dom: DomSource }) =>
  Button({ ...sources, styles$: just([Button.raised, Button.accent]), children$: just(['Accent']) });

const RedButton = (sources: { dom: DomSource }) =>
  Button({ ...sources, styles$: just([Button.raised, Button.red]), children$: just(['Red']) });

const GreenButton = (sources: { dom: DomSource }) =>
  Button({ ...sources, styles$: just([Button.raised, Button.green]), children$: just(['Green']) });

const YellowButton = (sources: { dom: DomSource }) =>
  Button({ ...sources, styles$: just([Button.raised, Button.yellow]), children$: just(['Yellow']) });

const BlueButton = (sources: { dom: DomSource }) =>
  Button({ ...sources, styles: just([Button.raised, Button.blue]), children$: just(['Blue']) });