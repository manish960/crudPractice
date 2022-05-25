const initialData = {
    loading: false,
    data: [],
    error: ""
}
const mockupReducer = (state = initialData, { type, payload }) => {
    switch (type) {
        case "FETCH_MCKUP":
            return {
                loading: true,
                data: payload
            }

        case "MCKUP_SUCCESS":
            return {
                loading: false,
                data: payload
            }

        case "MCKUP_FAILED":
            return {
                loading: false,
                data: payload,
                error: "failed to get data"
            }

        case "DELETING_MCKUP":
            return {
                loading: true,
                data: payload
            }

        case "DELETED_MCKUP_SUCESS":
            return {
                loading: false,
                data: payload
            }

        case "DELETED_MCKUP_FAILED":
            return {
                loading: false,
                data: payload,
                error: "failed to get data"
            }


        case "UPDATING_MCKUP":
            return {
                loading: true,
                data: payload,

            }


        case "UPDATE_MCKUP_SUCESS":
            return {
                loading: false,
                data: payload,

            }

        case "UPDATE_MCKUP_FAILED":
            return {
                loading: false,
                data: payload,
                error: "failed to get data"
            }

            case "CREATE_USER":
            return {
                loading: true,
                data: payload,

            }


        case "CREATE_USER_SUCCESS":
            return {
                loading: false,
                data: payload,

            }

        case "CREATE_USER_FAILED":
            return {
                loading: false,
                data: payload,
                error: "failed to get data"
            }

        default:
            return initialData

    }
}


export default mockupReducer;