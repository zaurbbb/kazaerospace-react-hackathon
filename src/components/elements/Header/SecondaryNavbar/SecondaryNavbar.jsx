//импорт модулей
import React from 'react';

//импорт стилей
import css from './SecondaryNavbar.module.sass';

//импорт стилей
import LocationIcon from './images/location_icon.svg';
import DarkThemeIcon from './images/dark_theme_icon.svg';
import {FormControl, MenuItem, Select} from "@mui/material";

const SecondaryNavbar = () => {
    return (
        <div className={css.Container}>
            <div className={css.ButtonsGroup}>
                <button className='button button_light'>
                    город Караганда <img src={LocationIcon} alt=""/>
                </button>
                <FormControl >
                    <Select defaultValue={'ru'}>
                        <MenuItem value={'ru'} >
                            <div>
                                Русский
                            </div>
                        </MenuItem>
                        <MenuItem value={'kz'}  >
                            <div>
                                Казахский
                            </div>
                        </MenuItem>
                    </Select>
                </FormControl>

            </div>
            <div className={css.ButtonsGroup}>
                <button className='button button_light'>
                    Темная Тема <img src={DarkThemeIcon} alt=""/>
                </button>
            </div>
        </div>
    );
};

export default SecondaryNavbar;