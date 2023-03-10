import { Collapsible as KCollapsible } from '@kobalte/core';
import { CaretRightIcon } from '@tokenize/figma-icons';
import { JSX, ParentProps } from 'solid-js';
import {
  collapsible,
  collapsibleCaret,
  collapsibleContent,
  collapsibleHeader,
  collapsibleLabel,
} from './collapsible.css';

interface CollapsibleProps extends KCollapsible.CollapsibleRootOptions {
  title: string;
  section?: boolean;
  control?: JSX.Element;
}
export function Collapsible(props: ParentProps<CollapsibleProps>) {
  return (
    <KCollapsible.Root
      class={collapsible}
      isDisabled={props.isDisabled}
      defaultIsOpen={props.defaultIsOpen}
      onOpenChange={props.onOpenChange}
      isOpen={props.isOpen}
      forceMount={props.forceMount}
    >
      <div class={collapsibleHeader}>
        <KCollapsible.Trigger data-section={props.section} class={collapsibleLabel}>
          <CaretRightIcon class={collapsibleCaret} />
          {props.title}
        </KCollapsible.Trigger>
        {props.control}
      </div>

      <KCollapsible.Content class={collapsibleContent}>{props.children}</KCollapsible.Content>
    </KCollapsible.Root>
  );
}
