export default function httpException(code, message='')
{
    switch (code) {
        case 201 :
            return {
                message: message || 'konten berhasil dibuat',
                status: 201
            }
        case 204 :
            return {
                message: message || 'tidak ada data',
                status: 204
            }
        case 400 :
        case 403 :
            return {
                message: message || 'kamu tidak memiliki akses difitur ini',
                status: 400
            }
        case 500 :
        default :
            return {
                message: message || 'internal server error',
                status: code || 500
            }
    }
}
