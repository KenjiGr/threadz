import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'All Jerseys',
                imageUrl: 'https://images.unsplash.com/photo-1499754162586-08f451261482?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                id: 1
            },
            {
                title: 'Current Jerseys',
                imageUrl: 'https://images.unsplash.com/photo-1551479460-5e76c686816a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1320&q=80',
                id: 2
            },
            {
                title: 'Retro Jerseys',
                imageUrl: 'https://images.unsplash.com/photo-1560973802-d3b7d065ef74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                id: 3
            },
            {
                title: 'Other Jerseys',
                imageUrl: 'https://images.unsplash.com/photo-1555356109-872a9d903d5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
                size: 'large',
                id: 4
            },
            {
                title: 'Mystery Box',
                imageUrl: 'https://images.unsplash.com/photo-1583514735599-2ec2d33beaf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
                size: 'large',
                id: 5
            },
        ]}
    }

    render() {
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
};

export default Directory;