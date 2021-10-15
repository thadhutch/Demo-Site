import { useState } from 'react';
import Icon from "../../Icon";
import styles from "./input.module.sass"

function Input() {

    const [search, setSearch] = useState("");

    return (
<div className={styles.form__group}>
            <input type="input" className={styles.form__field} placeholder="Search" name="search" value={search}
                onChange={(e) => setSearch(e.target.value)} required />
            {/* <label for="name" className="form__label">Search</label> */}
            <button>
                  <Icon name="search" size="20"/>
                </button>
        </div>
    );


}

export default Input;