import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Input = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: solid 2.5px ${props => props.theme.colors.eucalyptusGreen};
  order: 1;

  &:checked {
    background-color: ${props => props.theme.colors.indigo};

    & + label {
      font-weight: 700;
    }
  }
`

const Label = styled.label`
  font-size: 0.875rem;
  line-height: 1.43;
`

class Checkbox extends Component {
  state = {
    checked: this.props.checked,
  }

  toggleCheckbox = () => {
    let checked = !this.state.checked;
    this.setState({checked})
  }

  render() {
    return (
      <Wrapper>
        <Input 
          type="checkbox" 
          id={this.props.id}
          value={this.props.value} 
          name={this.props.name}
          onChange={(e)=> {
            this.toggleCheckbox(e)
            if(this.props.handleChange) {
              this.props.handleChange(e)
            }
          }}
        />
        <Label htmlFor={this.props.id}>{this.props.label}</Label>
      </Wrapper>
    )
  }
}

export default Checkbox

Checkbox.propTypes = {
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
}
