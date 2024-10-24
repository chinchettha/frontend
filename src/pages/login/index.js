// src/pages/login/index.js
import styles from './login.module.css';

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.loginModal}>
                <h2>Tech Alert</h2>
                <p>Hana Microelectronics</p>
                <form>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="Username" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className={styles.options}>
                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        {/* <a href="#" className={styles.forgotPassword}>Forgot password?</a> */}
                    </div>
                    <button type="submit" className={styles.button}>Login</button>
                    <p className={styles.registerText}>
                        Don’t have an account? <a href="#">Contact admin</a>
                    </p>
                </form>
            </div>
        </div>
    );
}
