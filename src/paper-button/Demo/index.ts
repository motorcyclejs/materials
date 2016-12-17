import {
  DemoSnippetStyles,
  IronDemoHelpersStyles,
} from '../../iron-demo-helpers';
import { DomSinks, DomSources } from '../../types';
import { Stream, just } from 'most';
import { VNode, div, h3 } from '@motorcycle/dom';

import { DemoStyles } from './styles';
import { PaperButton } from '../PaperButton';
import { combineObj } from 'most-combineobj';
import isolate from '@cycle/isolate';

export interface DemoSinks extends DomSinks { }

export interface DemoSources extends DomSources { }

export interface DemoModel {
  paperButtonLink: VNode;
  paperButtonRaised: VNode;
}

export function Demo(sources: DemoSources): DemoSinks {
  const paperButtonLink = isolate(PaperButton)({ ...sources, children$: just([`link`]) }).dom;
  const paperButtonRaised =
    isolate(PaperButton)({
      ...sources,
      props$: just({ raised: true }),
      children$: just([`raised`]),
    }).dom;

  const model$: Stream<DemoModel> =
    combineObj({ paperButtonLink, paperButtonRaised });

  return {
    dom: model$.map(view),
  };
}

function view(model: DemoModel): VNode {
  const host: VNode =
    div(IronDemoHelpersStyles.host, [
      div(DemoStyles.verticalSectionContainer + IronDemoHelpersStyles.centered, [
        h3([`Buttons can be flat, raised, toggleable, or disabled`]),
        div(DemoSnippetStyles.host + IronDemoHelpersStyles.demoSnippet, [
          div(DemoSnippetStyles.demo + IronDemoHelpersStyles.demoSnippetCenteredDemo, [
            model.paperButtonLink,
            model.paperButtonRaised,
          ]),
        ]),
      ]),
    ]);

  return host;
}
