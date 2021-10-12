import React from 'react'
import { defaultProps } from '../../../utils/PiziComponent/PiziComponent'
import { [FTName] } from './[FTName]'

export default {
	title: '[FTName]',
	component: [FTName],
	argTypes: {
		display: {
		  defaultValue: defaultProps.display
		},
		color: {
		  defaultValue: defaultProps.color
		}
	}
}


const Template = ({...args}) => <>
	<[FTName] {...args}></[FTName]>
</>


export const Default = Template.bind({});
Default.args = {
}