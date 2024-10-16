import app from "@/src/app"
import configs from "@/src/config";

function run() {
   app.listen(3001, () => {
     console.log(`API Sample running on: http://localhost:${configs.port}`)
   })
}

run();