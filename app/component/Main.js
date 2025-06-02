"use client";

import { useTheme } from "./ThemeContext";
import styles from "../page.module.css";

export default function Main() {
  const { theme } = useTheme();
    return (
      <>
      <div className={styles.main}>
      <div className={`${styles.card} ${styles[theme]}`}>卡片 1</div>
      <div className={`${styles.card} ${styles[theme]}`}>卡片 2</div>
      <div className={`${styles.card} ${styles[theme]}`}>卡片 3</div>
      <div className={`${styles.card} ${styles[theme]}`}>卡片 4</div>
      <div className={`${styles.card} ${styles[theme]}`}>卡片 5</div>
      <div className={`${styles.card} ${styles[theme]}`}>卡片 6</div>
    </div>
    
    {/* <div class="row"><div class="navigation-primary"><nav id="site-navigation" class="main-navigation menu-fix" aria-label="Primary Menu"><div id="primary" class="mega_main_menu primary primary_style-flat icons-left first-lvl-align-left first-lvl-separator-none direction-horizontal fullwidth-disable pushing_content-disable mobile_minimized-enable dropdowns_trigger-hover dropdowns_animation-none no-search no-woo_cart no-buddypress responsive-enable coercive_styles-disable indefinite_location_mode-disable language_direction-ltr version-2-2-1 mega_main" style="z-index: 980;"><div class="menu_holder"><div class="mmm_fullwidth_container"></div><div class="menu_inner" role="navigation">
<span class="nav_logo">
<span class="mobile_toggle" data-target="#main_ul-primary" aria-expanded="false" aria-controls="main_ul-primary">
<span class="mobile_button">
Menu &nbsp;
<span class="symbol_menu">≡</span>
<span class="symbol_cross">╳</span>
</span>
</span>
</span><ul id="main_ul-primary" class="mega_main_menu_ul" role="menubar" aria-label="Menu"><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5566 default_dropdown default_style drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/about-us/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
關於我們
</span>
</span>
</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5569 default_dropdown default_style drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/news/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
訊息中心
</span>
</span>
</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5565 default_dropdown default_style drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/products/" class="item_link  disable_icon" aria-haspopup="true" aria-expanded="false" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
商品介紹
</span>
</span>
</a><ul class="mega_dropdown" aria-expanded="false" aria-hidden="true" role="menu" aria-label=""><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5547 default_dropdown default_style drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e5%a8%81%e7%b6%b8-weintek-easyview/" class="item_link  disable_icon" aria-haspopup="true" aria-expanded="false" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
威綸 WEINTEK人機介面
</span>
</span>
</a><ul class="mega_dropdown" aria-expanded="false" aria-hidden="true" role="menu" aria-label=""><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7852 default_dropdown drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e5%a8%81%e7%b6%b8-weintek-easyview/cmt-x%e7%b3%bb%e5%88%97/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
cMT X系列
</span>
</span>
</a></li><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7853 default_dropdown drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e5%a8%81%e7%b6%b8-weintek-easyview/iiot-gateway/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
cMT IIoT Gateway
</span>
</span>
</a></li><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7851 default_dropdown drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e5%a8%81%e7%b6%b8-weintek-easyview/ie%e3%80%81xe%e3%80%81ip%e3%80%81emt%e7%b3%bb%e5%88%97/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
iE、XE、iP、eMT系列
</span>
</span>
</a></li><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7854 default_dropdown drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e5%a8%81%e7%b6%b8-weintek-easyview/ir%e7%b3%bb%e5%88%97/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
iR系列
</span>
</span>
</a></li></ul></li><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5548 default_dropdown default_style drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e5%8f%af%e7%a8%8b%e5%bc%8f%e6%8e%a7%e5%88%b6%e5%99%a8plc/" class="item_link  disable_icon" aria-haspopup="true" aria-expanded="false" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
可程式控制器PLC
</span>
</span>
</a><ul class="mega_dropdown" aria-expanded="false" aria-hidden="true" role="menu" aria-label=""><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7859 default_dropdown drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e5%8f%af%e7%a8%8b%e5%bc%8f%e6%8e%a7%e5%88%b6%e5%99%a8plc/%e6%b0%b8%e5%ae%8f-fatek/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
永宏 FATEK
</span>
</span>
</a></li><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7864 default_dropdown drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e5%8f%af%e7%a8%8b%e5%bc%8f%e6%8e%a7%e5%88%b6%e5%99%a8plc/%e5%a3%ab%e6%9e%97-shinlin/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
士林 SHINLIN
</span>
</span>
</a></li><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7860 default_dropdown drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e5%8f%af%e7%a8%8b%e5%bc%8f%e6%8e%a7%e5%88%b6%e5%99%a8plc/%e4%b8%89%e8%8f%b1-mitsubishi/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
三菱 MITSUBISHI
</span>
</span>
</a></li><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7865 default_dropdown drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e5%8f%af%e7%a8%8b%e5%bc%8f%e6%8e%a7%e5%88%b6%e5%99%a8plc/%e5%8f%b0%e9%81%94-delta/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
台達 DELTA
</span>
</span>
</a></li></ul></li><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5549 default_dropdown default_style drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e4%bc%ba%e6%9c%8d%e9%a6%ac%e9%81%94%e5%8f%8a%e9%a9%85%e5%8b%95%e5%99%a8/" class="item_link  disable_icon" aria-haspopup="true" aria-expanded="false" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
伺服馬達及驅動器
</span>
</span>
</a><ul class="mega_dropdown" aria-expanded="false" aria-hidden="true" role="menu" aria-label=""><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7870 default_dropdown drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e4%bc%ba%e6%9c%8d%e9%a6%ac%e9%81%94%e5%8f%8a%e9%a9%85%e5%8b%95%e5%99%a8/%e5%a3%ab%e6%9e%97/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
士林 SHINLIN
</span>
</span>
</a></li><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7861 default_dropdown drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e4%bc%ba%e6%9c%8d%e9%a6%ac%e9%81%94%e5%8f%8a%e9%a9%85%e5%8b%95%e5%99%a8/mitsubishi%e4%b8%89%e8%8f%b1-%e4%bc%ba%e6%9c%8d%e9%a6%ac%e9%81%94%e5%8f%8a%e9%a9%85%e5%8b%95%e5%99%a8/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
三菱 MITSUBISHI
</span>
</span>
</a></li></ul></li><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5550 default_dropdown default_style drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e8%ae%8a%e9%a0%bb%e5%99%a8inverter/" class="item_link  disable_icon" aria-haspopup="true" aria-expanded="false" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
變頻器INVERTER
</span>
</span>
</a><ul class="mega_dropdown" aria-expanded="false" aria-hidden="true" role="menu" aria-label=""><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7869 default_dropdown drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e8%ae%8a%e9%a0%bb%e5%99%a8inverter/%e5%a3%ab%e6%9e%97-%e8%ae%8a%e9%a0%bb%e5%99%a8inverter/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
士林電機 SHINLIN
</span>
</span>
</a></li><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7862 default_dropdown drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e8%ae%8a%e9%a0%bb%e5%99%a8inverter/mitsubishi%e4%b8%89%e8%8f%b1-%e8%ae%8a%e9%a0%bb%e5%99%a8inverter/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
三菱電機 MITSUBISHI
</span>
</span>
</a></li></ul></li><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5551 default_dropdown default_style drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e4%b8%96%e5%8d%94%e6%b8%9b%e9%80%9f%e6%a9%9f/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
世協減速機
</span>
</span>
</a></li><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5552 default_dropdown default_style drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/supplier/" class="item_link  disable_icon" aria-haspopup="true" aria-expanded="false" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
電源供應器
</span>
</span>
</a><ul class="mega_dropdown" aria-expanded="false" aria-hidden="true" role="menu" aria-label=""><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-7874 default_dropdown drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/supplier/%e6%98%8e%e7%b7%af/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
明緯
</span>
</span>
</a></li><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7876 default_dropdown drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/supplier/%e8%89%be%e5%8f%af/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
艾可
</span>
</span>
</a></li></ul></li><li class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-5560 default_dropdown default_style drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/product-category/%e6%ba%ab%e6%8e%a7%e5%99%a8%e5%92%8c%e9%8c%b6%e9%a0%ad/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
溫控器和錶頭
</span>
</span>
</a></li></ul></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5567 default_dropdown default_style drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/request-quote/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
詢價單
</span>
</span>
</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5570 default_dropdown default_style drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/applications/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
應用範例
</span>
</span>
</a></li><li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5568 default_dropdown default_style drop_to_right submenu_default_width columns1">
<a href="https://easyhmi.com.tw/contact-us/" class="item_link  disable_icon" role="menuitem" tabindex="0">
<i class=""></i>
<span class="link_content">
<span class="link_text">
聯絡我們
</span>
</span>
</a></li></ul></div></div></div></nav></div><div class="shopping-cart-wrp"></div></div> */}
    
    </>
    );
  }