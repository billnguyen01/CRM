export const contactLayouts = {
    icon: 'icon-people',
    list: {
        title: 'name',
        fields: {
            name: {
                type: 'text',
                label: 'Name'
            },
            phone: {
                type: 'text',
                label: 'Phone'
            },
            email: {
                type: 'text',
                label: 'Email'
            },
        }
    },
    view: {
        title: 'name',
        fields: [
            {
                avatar: {
                    type: 'image',
                    label: 'Avatar'
                },
                name: {
                    type: 'text',
                    label: 'Name'
                },
            },
            {
                phone: {
                    type: 'text',
                    label: 'Phone'
                },
                email: {
                    type: 'text',
                    label: 'Email'
                }
            },
            {
                address: {
                    type: 'array',
                    label: 'Address',
                    props: {
                        itemType: 'address'
                    }
                },
            }
        ]
    }
};
