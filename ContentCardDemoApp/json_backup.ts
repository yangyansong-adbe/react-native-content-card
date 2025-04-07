

const demo1: ComponentConfig = {
    "type": "view",
    "style": {
        "flexDirection": "column",
        "padding": 16,
        "borderWidth": 2,
        "borderColor": "#FF0000",
        "borderRadius": 8
    },
    "children": [
        {
            "type": "image",
            "style": {
                "width": -1,
                "borderRadius": 8,
                "contentScale": "crop"
            },
            "content": "https://analyticsindiamag.com/wp-content/uploads/2023/03/adobe.jpeg"
        },
        {
            "type": "view",
            "style": {
                "flexDirection": "row",
                "marginLeft": 12,
                "marginRight": 12,
                "marginTop": 12,
                "marginBottom": 12
            },
            "children": [
                {
                    "type": "view",
                    "style": {
                        "flexDirection": "column",
                        "weight": 1
                    },
                    "children": [
                        {
                            "type": "text",
                            "style": {
                                "fontSize": 18,
                                "fontWeight": "400",
                                "marginBottom": 12,
                                "borderRadius": 8
                            },
                            "content": "Title 1"
                        },
                        {
                            "type": "text",
                            "style": {
                                "fontSize": 16
                            },
                            "content": "Subtitle 1"
                        }
                    ]
                },
                {
                    "type": "view",
                    "style": {
                        "flexDirection": "column",
                        "weight": 1
                    },
                    "children": [
                        {
                            "type": "text",
                            "style": {
                                "fontSize": 18,
                                "fontWeight": "400",
                                "marginBottom": 12,
                                "borderRadius": 8
                            },
                            "content": "Title 2"
                        },
                        {
                            "type": "text",
                            "style": {
                                "fontSize": 16
                            },
                            "content": "Subtitle 2"
                        }
                    ]
                }
            ]
        }
    ]
}


const demo2: ComponentConfig = {
    "type": "view",
    "style": {
        "flexDirection": "row",
        "borderWidth": 2,
        "borderColor": "#FF0000",
        "borderRadius": 8
    },
    "children": [
        {
            "type": "image",
            "style": {
                "width": 120,
                "borderRadius": 8,
                "contentScale": "crop"
            },
            "content": "https://analyticsindiamag.com/wp-content/uploads/2023/03/adobe.jpeg"
        },
        {
            "type": "view",
            "style": {
                "flexDirection": "column",
                "padding": 14,
                "marginLeft": 12
            },
            "children": [
                {
                    "type": "text",
                    "style": {
                        "fontSize": 18,
                        "fontWeight": "400",
                        "marginBottom": 12,
                        "borderRadius": 8
                    },
                    "content": "Testing Adobe images"
                },
                {
                    "type": "text",
                    "style": {
                        "fontSize": 16
                    },
                    "content": "This image is picked from web"
                }
            ]
        }
    ]
}

const demo3: ComponentConfig = {
    "type": "view",
    "style": {
        "flexDirection": "box",
        "alignItems": "center",
        "padding": 16,
        "borderWidth": 2,
        "borderColor": "#FF0000",
        "borderRadius": 8
    },
    "children": [
        {
            "type": "image",
            "style": {
                "width": -1,
                "borderRadius": 8,
                "contentScale": "crop"
            },
            "content": "https://analyticsindiamag.com/wp-content/uploads/2023/03/adobe.jpeg"
        },
        {
            "type": "text",
            "style": {
                "fontSize": 24,
                "fontWeight": "bold",
                "color": "#FFFFFF",
                "padding": 8,
                "borderRadius": 4,
                "justifyContent": "bottom"
            },
            "content": "This is an image only template"
        }
    ]
}