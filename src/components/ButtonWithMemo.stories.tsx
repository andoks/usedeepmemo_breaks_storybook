import React, {ComponentProps} from "react";

import {Meta, Story} from "@storybook/react";

import {ButtonWithMemo} from "./ButtonWithMemo";

export default {
    title: "ButtonWithMemo",
    component: ButtonWithMemo,
} as Meta;

type StoryPropsT = ComponentProps<typeof ButtonWithMemo>;
const Template :Story<StoryPropsT> = (args: StoryPropsT) => (<ButtonWithMemo {...args} />);

export const  Default = Template.bind({});
Default.args = {
    // no args
}