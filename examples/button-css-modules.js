// Button.js
import styles from "./Button.scss"

class Button extends React.Component {

    render() {

        let classNames = [styles.button]

        if(this.props.error) {
            classNames.push(styles.error)
        }

        return (
            <button className={classNames.join(' ')}>
                {this.props.children}
            </button>
        )

    }

}

// App.js

// normal button
<Button>All is good</Button>

// error button
<Button error>Oh no</Button>

