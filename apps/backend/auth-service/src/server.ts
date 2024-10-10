import app from "@/src/app"

function run() {
   app.listen(3001, () => {
     console.log(`User service running on: http://localhost:3000`)
   })
}

run();