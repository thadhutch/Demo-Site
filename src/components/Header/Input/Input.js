import { useState } from 'react';
import "./input.scss";
import Icon from "../../Icon";
import styles from "./input.scss"

function Input() {

    const [search, setSearch] = useState("");

    return (
        <div class="form__group field">
            <input type="input" class="form__field" placeholder="Search" name="search" value={search}
                onChange={(e) => setSearch(e.target.value)} required />
            {/* <label for="name" class="form__label">Search</label> */}
            <button>
                  <Icon name="search" size="20"/>
                </button>
        </div>
    );


}

export default Input;