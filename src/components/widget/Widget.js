import React from 'react'
import './widget.css'
import InfoIcon from '@material-ui/icons/Info';

function Widget() {
    return (
        <div className='widget'>
            <div className='widget__top'>
                <div className='widget__header'>
                    <h4>LinkedIn News</h4>
                    <InfoIcon />
                </div>
                <div className='widget__body'>
                    <ul className='widget__options'>
                        <li>
                            <h4>slaying Job search fees</h4>
                            <p>6d ago +500 readers</p>
                        </li>

                        <li>
                            <h4>slaying Job search fees</h4>
                            <p>6d ago +500 readers</p>
                        </li>

                        <li>
                            <h4>slaying Job search fees</h4>
                            <p>6d ago +500 readers</p>
                        </li>
                        <li>
                            <h4>slaying Job search fees</h4>
                            <p>6d ago +500 readers</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='widget__bottom'>
                <div className='widget__header'>
                    <h4>LinkedIn News</h4>
                    <InfoIcon />
                </div>
                <div className='widget__body'>
                    <ul className='widget__options'>
                        <li>
                            <h4>slaying Job search fees</h4>
                            <p>6d ago +500 readers</p>
                        </li>

                        <li>
                            <h4>slaying Job search fees</h4>
                            <p>6d ago +500 readers</p>
                        </li>

                        <li>
                            <h4>slaying Job search fees</h4>
                            <p>6d ago +500 readers</p>
                        </li>
                        <li>
                            <h4>slaying Job search fees</h4>
                            <p>6d ago +500 readers</p>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Widget