import { useToggle } from '@/hooks/useToggle';

export default function NewsItem({
  title,
  url,
  urlToImage,
  description,
  index,
}) {
  const [visible, toggleVisible] = useToggle(false);

  return (
    <article
      className="news-item slide-in-right"
      style={{
        '--delay': `${index * 0.2}s`,
      }}
    >
      <h3 className="news-item__title">
        <a href={url}>{title}</a>
      </h3>
      <button onClick={toggleVisible}>
        {visible ? 'Weniger anzeigen' : 'Mehr anzeigen'}
      </button>
      {visible && (
        <div className="news-item__content">
          {urlToImage && (
            <img className="news-item__image" src={urlToImage} alt="" />
          )}
          <p className="news-item__description">{description}</p>
        </div>
      )}
    </article>
  );
}

/* 
Mit Hilfe des useToggle-Hooks, den wir in der
Custom Hooks-Übung geschrieben haben, soll der Content-Bereich
ein- und ausgeblendet werden, der Text im Button soll entsprechend
wechseln. Anfangs soll der Content eingeklappt sein.
Das Bild nur anzeigen, wenn eine Bildquelle vorhanden
ist. Das alt-Attribut kann leer bleiben, weil es im Datensatz leider
nicht enthalten ist.
  
  <article class="news-item">
<h3 class="news-item__title">
  <a href="">Titel</a>
</h3>
<button>
 Weniger anzeigen / Mehr anzeigen
</button>
<div class="news-item__content">
<img class="news-item__image" src="" alt="" />
<p class="news-item__description">Nachrichtentext</p>
</div>
</article> */

/* 
Mit Hilfe des useToggle-Hooks, den wir in der
Custom Hooks-Übung geschrieben haben, soll der Content-Bereich
ein- und ausgeblendet werden, der Text im Button soll entsprechend
wechseln. Anfangs soll der Content eingeklappt sein.
Das Bild nur anzeigen, wenn eine Bildquelle vorhanden
ist. Das alt-Attribut kann leer bleiben, weil es im Datensatz leider
nicht enthalten ist.
  
  <article class="news-item">
<h3 class="news-item__title">
  <a href="">Titel</a>
</h3>
<button>
 Weniger anzeigen / Mehr anzeigen
</button>
<div class="news-item__content">
<img class="news-item__image" src="" alt="" />
<p class="news-item__description">Nachrichtentext</p>
</div>
</article> */
