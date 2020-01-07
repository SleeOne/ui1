import React, {Component} from 'react'

export default class Block extends Component {
  render() {
    const {
      flex,
      row,
      column,
      center,
      middle,
      space,
      right,
      left,
      top,
      bottom,
      style,
      children,
      ...props
    } = this.props


    //ReactJS
    const blockStyles = {
      ...styles.block,
      ...(flex && { flex }),
      ...flex === false && { flex: 0 }, //reset / disable flex
      ...row && styles.row,
      ...column && styles.column,
      ...center && styles.center,
      ...middle && styles.middle,
      ...space === 'between' && styles.between,
      ...space === 'around' && styles.around,
      ...right && styles.right,
      ...left && styles.left,
      ...top && styles.top,
      ...bottom && styles.bottom,
      ...style, //rewrite predefined style
    }


    return (
      <div style={blockStyles} {...props}>
        {children}
      </div>
    )
  }
}

const styles = {
  block: {
    display: 'flex',
    flex: 1,
    padding: 0,
    margin: 0,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center'
  },
  between: {
    justifyContent: 'space-between'
  },
  around: {
    justifyContent: 'space-around'
  },
  right: {
    justifyContent: 'flex-end'
  },
  left: {
    justifyContent: 'flex-start'
  },
  top: {
    alignItems: 'flex-start'
  },
  bottom: {
    alignItems: 'flex-end'
  }

}


