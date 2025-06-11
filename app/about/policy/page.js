"use client";

import Breadcrumbs from "../../component/Breadcrumbs";
// import styles from './slider.module.css'

export default function policy() {
  return (
    <div className="wrapper">
      <div className="mt-5">
        <h2 className={`fw-bold text-center`}>隱私權政策</h2>
        <Breadcrumbs
          links={[
            { label: "首頁", href: "/" },
            {
              label: " 隱私權政策",
              href: "/about",
              active: true,
            },
          ]}
        />
        <div className="container my-5">
          <p>
            歡迎您光臨立申電機有限公司（www.easyhmi.com.tw，以下簡稱「本網站」）。為讓您安心使用各項服務與資訊，我們特此說明本網站的隱私權保護政策，以保障您的權益。請詳閱以下內容：
          </p>

          <h5 className="my-4">一、適用範圍</h5>
          <p>
            本政策說明本網站如何處理您在使用網站服務時所收集的個人識別資料。隱私政策不適用於非本網站控制的第三方網站或人員。
          </p>

          <h5 className="my-4">二、個人資料的蒐集、處理及利用方式</h5>
          <ul>
            <li>您在參與活動時，會請您提供必要個人資料，僅限特定目的使用。</li>
            <li>
              使用服務信箱、問卷時，會保留您的姓名、Email、聯絡方式及使用時間等。
            </li>
            <li>一般瀏覽行為會紀錄 IP、時間、瀏覽器等資料，僅供內部分析用。</li>
            <li>問卷結果會進行統計分析，僅公布無法識別特定個人的數據。</li>
          </ul>

          <h5 className="my-4">三、資料之保護</h5>
          <ul>
            <li>本網站主機有防火牆、防毒等資訊安全設備，並由授權人員管理。</li>
            <li>處理人員簽有保密合約，違者將依法處理。</li>
            <li>若委外服務，也會要求其遵守保密義務。</li>
          </ul>

          <h5 className="my-4">四、對外連結</h5>
          <p>
            本網站頁面可能含有其他網站連結，點擊後將跳轉至其他網站，其隱私權政策不適用於本網站，請另行參閱該網站。
          </p>

          <h5 className="my-4">五、個人資料的第三人共用政策</h5>
          <p>
            本網站絕不會任意對外出售、交換、出租或揭露您的個人資料，除非符合以下情況：
          </p>
          <ul>
            <li>經您書面同意。</li>
            <li>法律明文規定。</li>
            <li>維護國家安全或公共利益。</li>
            <li>防止生命、身體、自由或財產危險。</li>
            <li>統計、學術研究目的，且無法識別特定個人。</li>
            <li>違反服務條款需依法追究時。</li>
          </ul>

          <h5 className="my-4">六、Cookie 使用說明</h5>
          <p>
            為提供更佳服務，本網站會使用
            Cookie。若您不願接受，可於瀏覽器設定拒絕，但可能影響部分功能運作。
          </p>

          <h5 className="my-4">七、隱私政策修正</h5>
          <p>
            本網站保留隨時修訂本政策之權利，修改後將公布於網站中，不另行通知。
          </p>
        </div>
      </div>
    </div>
  );
}
