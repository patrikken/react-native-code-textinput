import React, { Component } from 'react'
import {
    View, StyleSheet, TextInput, TextInputProps, StyleProp, TextStyle
} from 'react-native'

interface Props extends TextInputProps {
    active?: boolean,
    style: any,
    activeStyle?: StyleProp<TextStyle>,
}

interface State {
    active: boolean,
}

export default class AppInput extends Component<Props, State> {
    childRef: TextInput | null
    constructor(props: Props) {
        super(props)
        this.state = {
            active: false
        }
        this.childRef = null
        console.log(props);

    }

    render() {
        return (
            <View>
                <TextInput
                    onBlur={() => this.setState({ active: false })}
                    style={[styles.input, this.props.style, this.state.active ? this.props.activeStyle : {}]}
                    onFocus={() => this.setState({ active: true })}
                    ref={(ref) => this.childRef = ref}
                    blurOnSubmit={true}
                    onKeyPress={(event) => this.props.onKeyPress(event)}
                    keyboardType={this.props.keyboardType}
                    onChangeText={(val) => this.props.onChangeText(val)}
                    value={this.props.value}
                //{...this.props}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        width: 50,
        padding: 3,
        height: 40,
        borderRadius: 10,
        backgroundColor: "#182b32",
        color: "#fff"
    }
})
