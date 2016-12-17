import * as assert from 'assert';

import {
  PaperButton,
  PaperButtonSinks,
  PaperButtonSources,
  PaperButtonStyles,
} from './';
import { VNode, mockDomSource } from '@motorcycle/dom';

import { just } from 'most';

let defaultSources: PaperButtonSources =
  {
    dom: mockDomSource({}),
    children$: just([]),
  };

describe(`PaperButton`, () => {
  it(`has a DOM stream in its sinks`, () => {
    const sinks: PaperButtonSinks = PaperButton(defaultSources);

    assert.ok(sinks.hasOwnProperty(`dom`));
  });

  describe(`view`, () => {
    it(`has a styled BUTTON element as root`, () => {
      const sinks: PaperButtonSinks = PaperButton(defaultSources);

      return sinks.dom.observe((view: VNode) => {
        assert.ok((view.className as string).indexOf(PaperButtonStyles.host.slice(1)) > -1);
      });
    });
  });
});
