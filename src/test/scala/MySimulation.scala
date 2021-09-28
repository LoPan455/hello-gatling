import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class MySimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("http://localhost:8080")
    .acceptHeader("application/json")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  val getPosts = scenario("Get Posts")
    .exec(http("Get List Of Posts")
      .get("/posts/"))
    .pause(500.milliseconds)
    .exec(http("Get List Of Posts")
      .get("/posts/"))
    .pause(1)
    .exec(http("Get List Of Posts")
      .get("/posts/"))
    .pause(250.milliseconds)

  val getRandom = scenario("Get A Random Pause and Result")
    .exec(http("Get a random result")
      .get("/random/"))
      .pause(250.milliseconds)

  //  setUp(myScenario.inject(atOnceUsers(1000)).protocols(httpProtocol))
//  setUp(
//    getPosts
//      .inject(rampUsersPerSec(10).to(1000).during(10.seconds))
//      .protocols(httpProtocol)
//  )

  setUp(
    getRandom
      .inject(rampUsersPerSec(0).to(1000).during(5.seconds))
      .protocols(httpProtocol)
  )
}
