import React from 'react'

export default class FindAlbums extends React.Component {
    find = () => {
        alert('click')
    }

    render() {
        return (
            <div>
                FindAlbums
                <div>
                    <input />
                    <button onClick={this.find}>
                        Find!
                    </button>
                </div>
            </div>
        );
    }
}