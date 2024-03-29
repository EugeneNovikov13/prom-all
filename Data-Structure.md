Проект "Промышленный альянс"

Области хранения данных:

1. База данных на MongoDB
2. Redux Store

Сущности приложения:

1. Администратор: БД (список администраторов), Store (отображение приложения в
   режиме администрирования)
2. Акция: БД (список акций), Store (отображение в браузере)
3. Товар: БД (список товаров), Store (отображение в браузере)
4. Раздел каталога (структура разделов в каталоге), Store (отображение в браузере)
5. Бренд (список брендов), Store (отображение в браузере)

Таблицы БД:

1. Администратор - admin: id / login / password (hash)
2. Акции - promos: id / title / content / background
3. Товары - products: id / section / title / images: [ id / link ] / description / specifications /
   kinds: [ id / title ]
4. Бренды - brands: id / title / logo / isOfficial

Передаваемые Cookies:

1. Токен администратора: token

Схема для Redux Store (на клиенте):

1. app: isAdmin / modal: { isOpen / content / onConfirm / onCancel / isError } / breadcrumbs: { category / subcategory / type / item }
2. promos: массив promo: id / title / content / background
3. product: title / code / images: массив link / description / specifications / массив models: [ id / title ]
4. products: массив product: id / title / image: images[0]
5. brands: массив brand: id / title / image / isOfficial
