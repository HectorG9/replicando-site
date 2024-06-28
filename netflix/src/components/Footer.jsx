import Styles from "./footer.module.css"
import facebook from "./img/facebook.png"
import instagram from "./img/instagram.png"
import twitter from "./img/twitter.png"
import youtube from "./img/youtube.png"

export default function Footer() {
  return (
    <footer>
      <div>
        <div className={Styles.iconesociais}>
          <a href="https://www.facebook.com/netflixbrasil"><img className={Styles.icone} src={facebook} alt="icone facebook" title= "facebook"/></a>
          <a href="https://www.instagram.com/NetflixBrasil"><img className={Styles.icone} src={instagram} alt="icone instagram" title= "instagram"/></a>     
          <a href="https://x.com/NetflixBrasil"><img className={Styles.icone} src={twitter} alt="icone twiter" title= "twiter"/></a>
          <a href="https://www.youtube.com/user/NetflixBRA"><img className={Styles.icone} src={youtube} alt="icone youtube" title= "youtube"/></a>
        </div>
        <div>
          <ul className={Styles.footer}>
            <li><a href="">Audio descrição</a></li>
            <li><a href="">Relações com investidores</a></li>
            <li><a href="">Avisos legais</a></li>
            <li><a href="">Central de ajuda</a></li>
            <li><a href="">Carreiras</a></li>
            <li><a href="">Preferencias de cookies</a></li>
            <li><a href="">Cartão pré-pago</a></li>
            <li><a href="">Termos de uso</a></li>
            <li><a href="">Informações corporativas</a></li>
            <li><a href="">Imprensa</a></li>
            <li><a href="">Privacidade</a></li>
            <li><a href="">Entre em contato</a></li>
          </ul>
        </div>
        <div>
          <ul className={Styles.codigo}>
            <li><a href="">Código de serviço</a></li>
          </ul>
        </div>
        <div className={Styles.copy}>
          <span>©1997-2024 Netflix, inc.</span>
        </div>

      </div>
    </footer>
  )
}