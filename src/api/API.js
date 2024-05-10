export default class API {
  constructor() {
    this.url = import.meta.env.VITE_BACKEND_HOST
  }

  request(
    url, method = "GET",
    body = {}, headers = [""],
  ) {
    // отправляю запрос к backend-у
    let req = new XMLHttpRequest()
    req.open(method, this.url + url, false)

    if (body === {}) req.send()
    else req.send(JSON.stringify(body))

    // принимаю данные
    let return_req
    if (method === "GET")  return_req = true
    if (method === "POST") return_req = false

    if (req.status === 200) {
      if (return_req === true) {
        try {
          return JSON.parse(req.response)
        } catch (e) {
          console.error("`request, not return data (data is null)`")
          return {}
        }
      }
      if (return_req === false) return req.status
    }
    else if (req.status === 0) return "net::ERR_CONNECTION"
  }
}