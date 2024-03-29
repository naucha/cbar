import express from "express";
const app = express();
import createError from "http-errors";
import path from "path";

import home from "./routes/home.js";
import about from "./routes/about.js";
import layout from "./routes/layout.js";
import slots from "./routes/slots.js";
import slotsAll from "./routes/slotsAll.js";
import casino from "./routes/casino.js";
import promociones from "./routes/promociones.js";
import promocion from "./routes/promocion.js";
import ruleta from "./routes/ruleta.js";
import pokerHome from "./routes/pokerHome.js";
import pokerMobile from "./routes/pokerMobile.js";
import pokerTournament from "./routes/pokerTournament.js";
import pokerPc from "./routes/pokerPc.js";
import slotsScreen from "./routes/slots-screen.js";
import casinoScreen from "./routes/casino-screen.js";
import screenGame from "./routes/screen-game.js";
import data from "./routes/datos.js";
import docs from "./routes/documentos.js";
import history from "./routes/historial.js";
import wallet from "./routes/cartera.js";
import preferences from "./routes/preferencias.js";
import support from "./routes/soporte.js";
import user from "./routes/user.js";
import recoverPassword from "./routes/recoverPassword.js";
import signIn from "./routes/signIn.js";
import signUp from "./routes/signUp.js";
import register from "./routes/register.js";
import appApuestas from "./routes/appApuestas.js";
import error404 from "./routes/error404.js";
import atencionCliente from "./routes/atencionCliente.js";
import game from "./routes/juegoResponsable.js";
import gameExclusion from "./routes/juegoResponsableExcusion.js";
import gameLimit from "./routes/juegoResponsableLimit.js";
import verify from "./routes/verify.js";
import howTo from "./routes/pokerHowTo.js";
import texas from "./routes/pokerTexas.js";
import omaha from "./routes/pokerOmaha.js";
import pokerSatelitesOnline from "./routes/pokerSatelitesOnline.js";
import pokerSatelitesCEP from "./routes/pokerSatelitesCEP.js";
import pokerSatelitesNavidad from "./routes/pokerSatelitesNavidad.js";
import favourites from "./routes/favourites.js";
import boardGame from "./routes/boardGame.js";
import affiliates from "./routes/affiliates.js";
import landingAffiliates from "./routes/landingAfiliados.js";
import landingSEO from "./routes/landingSEO.js";
import apuestasVirtuales from "./routes/apuestasVirtuales.js";
import mpuDeposit from "./routes/mpuDeposit.js";
import mpuSkrill from "./routes/mpuSkrill.js";
import mpuDebit from "./routes/mpuDebit.js";
import mpuPaypal from "./routes/mpuPaypal.js";
import mpuNeteller from "./routes/mpuNeteller.js";
import mpuTransfer from "./routes/mpuTransfer.js";
import mpuPaysafe from "./routes/mpuPaysafe.js";
import mpuQuestionarie from "./routes/mpuQuestionarie.js";
import {fileURLToPath} from 'url';
import generic from "./routes/generic.js";
import rtp from "./routes/rtp.js";
import mpuPayout from "./routes/mpuPayout.js";
import mpuPayoutDebit from "./routes/mpuPayoutDebit.js";
import mpuPayoutNeteller from "./routes/mpuPayoutNeteller.js";
import mpuPayoutPaypal from "./routes/mpuPayoutPaypal.js";
import mpuPayoutPaysafe from "./routes/mpuPayoutPaysafe.js";
import mpuPayoutSkrill from "./routes/mpuPayoutSkrill.js";
import mpuPayoutTransfer from "./routes/mpuPayoutTransfer.js";
import mpuPayoutOk from "./routes/mpuPayoutOk.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// render engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", home);
app.use("/about", about);
app.use("/layout", layout);
app.use("/slots", slots);
app.use("/slots-all", slotsAll);
app.use("/casino", casino);
app.use("/promociones", promociones);
app.use("/promocion", promocion);
app.use("/ruleta", ruleta);
app.use("/poker-home", pokerHome);
app.use("/poker-pc", pokerPc);
app.use("/poker-mobile", pokerMobile);
app.use("/poker-tournament", pokerTournament);
app.use("/slots-screen", slotsScreen);
app.use("/casino-screen", casinoScreen);
app.use("/datos", data);
app.use("/mis-documentos", docs);
app.use("/historial", history);
app.use("/mi-cartera", wallet);
app.use("/preferencias", preferences);
app.use("/soporte", support);
app.use("/screen-game", screenGame);
app.use("/user", user);
app.use("/sign-in", signIn);
app.use("/recover-password", recoverPassword);
app.use("/sign-up", signUp);
app.use("/register", register);
app.use("/app-apuestas", appApuestas);
app.use("/error-404", error404);
app.use("/atencion-cliente", atencionCliente);
app.use("/satelites-online", pokerSatelitesOnline);
app.use("/satelites-cep", pokerSatelitesCEP);
app.use("/satelites-navidad", pokerSatelitesNavidad);
app.use("/favoritos", favourites);
app.use("/tabla-juegos", boardGame);
app.use("/afiliados", affiliates);
app.use("/juego-responsable", game);
app.use("/juego-responsable-exclusion", gameExclusion);
app.use("/juego-responsable-limit", gameLimit);
app.use("/verificacion", verify);
app.use("/como-jugar", howTo);
app.use("/como-jugar-texas", texas);
app.use("/como-jugar-omaha", omaha);
app.use("/landing-afiliados", landingAffiliates);
app.use("/mpu-deposit", mpuDeposit);
app.use("/mpu-skrill", mpuSkrill);
app.use("/mpu-debit", mpuDebit);
app.use("/mpu-neteller", mpuNeteller);
app.use("/mpu-paypal", mpuPaypal);
app.use("/mpu-transfer", mpuTransfer);
app.use("/mpu-paysafe", mpuPaysafe);
app.use("/mpu-questionarie", mpuQuestionarie);
app.use("/mpu-payout", mpuPayout);
app.use("/mpu-payout-debit", mpuPayoutDebit);
app.use("/mpu-payout-neteller", mpuPayoutNeteller);
app.use("/mpu-payout-paypal", mpuPayoutPaypal);
app.use("/mpu-payout-paysafe", mpuPayoutPaysafe);
app.use("/mpu-payout-skrill", mpuPayoutSkrill);
app.use("/mpu-payout-transfer", mpuPayoutTransfer);
app.use("/mpu-payout-ok", mpuPayoutOk);
app.use("/landing-seo", landingSEO);
app.use("/apuestas-virtuales", apuestasVirtuales);
app.use("/generic", generic);
app.use("/rtp", rtp);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

app.locals = {
  player: {
    isLogged: true
  }
};

export default app;