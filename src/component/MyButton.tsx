interface MyButtonProps {
    /** The text to display inside the button */
    title: string;
    /** Whether the button can be interacted with */
    disabled: boolean;
  }
  
const MyButton = ({ title, disabled }: MyButtonProps) => {
    return (
      <button disabled={disabled}>{title}</button>
    );
  }

  export default MyButton