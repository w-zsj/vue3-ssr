import { GET, POST } from '@/utils/server/http'
export const getMenus = (params?: any) => {
    return GET('http://localhost:3031/list', params)
}

export const testMock = (params?: any) => {
    return GET('/mock/list', params)
}