export const customerLayouts = {
    icon: 'icon-people',
    createMethod: 'customers.insert',
    updateMethod: 'customers.update',
    list: {
        title: 'name',
        fields: {
            name: {
                type: 'text',
                label: 'Name'
            },
            legalName: {
                type: 'text',
                label: 'Legal Name'
            },
            phone: {
                type: 'text',
                label: 'Phone'
            },
            email: {
                type: 'text',
                label: 'Email'
            }
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
                customerType: {
                    type: 'text',
                    label: 'Customer Type'
                }
            },
            {
                name: {
                    type: 'text',
                    label: 'Name'
                },
                legalName: {
                    type: 'text',
                    label: 'Legal Name'
                }
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
                billingAddress: {
                    type: 'array',
                    label: 'Billing Address',
                    props: {
                        itemType: 'address'
                    }
                },
                shippingAddress: {
                    type: 'array',
                    label: 'Shipping Address',
                    props: {
                        itemType: 'address'
                    }
                }
            }
        ]
    },
    related: {
        Contacts: {
            type: 'one-many'
        }
    }
};
