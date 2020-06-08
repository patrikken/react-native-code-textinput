import React, { Component } from 'react'
import {
    View, StyleSheet, TextInput, TextInputProps
} from 'react-native'

interface Props extends TextInputProps {
    active?: boolean,
    style: any,
}

interface State {
    active: boolean
}

export default class AppInput extends Component<Props, State> {
    childRef: TextInput | null
    constructor(props) {
        super(props)
        this.state = {
            active: false
        }
        this.childRef = null
    }

    render() {
        return (
            <View>
                <TextInput
                    onBlur={() => this.setState({ active: false })}
                    style={[styles2.input, this.props.style]}
                    onFocus={() => this.setState({ active: true })}
                    placeholderTextColor='#707070'
                    ref={(ref) => this.childRef = ref}
                    {...this.props}
                />
            </View>
        )
    }
}

const styles2 = StyleSheet.create({
    input: {
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        fontSize: 18,
        width: 50,
        padding: 3,
    }
})
