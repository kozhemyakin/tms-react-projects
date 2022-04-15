function Text({ text, fontSize, textColor, underline }) {
    let textUnderlined = underline ? 'underline' : 'none';

    const styles = {
      color: textColor,
      fontSize: fontSize + 'px',
      textDecoration: textUnderlined
    };
  
    return <div style={styles}>{text}</div>;
  }
  
  export default Text;