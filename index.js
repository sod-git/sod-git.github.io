const top_tab_1 = document.getElementById("top_table_tab_1");
const top_tab_2 = document.getElementById("top_table_tab_2");
const top_tab_3 = document.getElementById("top_table_tab_3");

const content_main = document.getElementById("content_window");

top_tab_1.addEventListener("click", function(){satMap();});
top_tab_2.addEventListener("click", function(){gallery()});
top_tab_3.addEventListener("click", function(){detection()});

function satMap(a){
    content_main.style.backgroundImage = "none";
    content_main.innerHTML = "<a href='https://earth.google.com/web/' target='_blank'>\
    <img src='./assets/images/gearth.png' alt='google earth image' width='100%' height='100%'/>\
</a>";
}


function gallery(){
    content_main.style.backgroundImage = "none";
    content_main.innerHTML="<table id='row'>\
    <header>Sample Images of object detection</header>\
    <tr>\
        <td>\
            <img src='./assets/gallery_images/1.jpg' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/2.jpg' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/3.jpg' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/4.jpg' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/5.png' class='image'>\
        </td>\
    </tr>\
    <tr class='column'>\
        <td>\
            <img src='./assets/gallery_images/6.png' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/7.jpg' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/8.jpg' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/9.jpg' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/10.jpg' class='image'>\
        </td>\
    </tr>\
    <tr class='column'>\
        <td>\
            <img src='./assets/gallery_images/11.png' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/12.png' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/13.png' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/14.png' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/15.png' class='image'>\
        </td>\
    </tr>\
    <tr class='column'>\
        <td>\
            <img src='./assets/gallery_images/16.png' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/17.png' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/18.png' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/19.jpg' class='image'>\
        </td>\
        <td>\
            <img src='./assets/gallery_images/20.jpg' class='image'>\
        </td>\
    </tr>\
</table>";
}

function detection(){
    content_main.style.backgroundImage = "none";
    content_main.innerHTML = "<div>\
    <div>\
    <iframe src='./colab_script.html' width='100%' height='548vh'></iframe>\
    </div>\
    <div class='tab3'>\
        <h3>Instructions for custom detection</h3>\
        <ul id='ins_list'>\
            <li>Click on <em>'Open in Colab'</em> above.</li>\
            <li>Change Runtime to GPU.</li>\
            <li>Run intialization tab.</li>\
            <li>Upload image.</li>\
            <li>Provide your image path</li>\
            <li>Run all cells in intialization tab</li>\
            <li>Run all cells in detection tab</li>\
        </ul>\
    </div>\
\
    <div class='tab3' id='tab3_div3'>\
        <h3>Supported Object Classes</h3>\
        <table id='class_list'>\
            <tr>\
                <td class='clist_ele'>\
                    Airplane\
                </td>\
                <td class='clist_ele'>\
                    Bridge\
                </td>\
            </tr>\
\
            <tr>\
                <td class='clist_ele'>\
                    Cross Roads\
                </td>\
                <td class='clist_ele'>\
                    Helipad\
                </td>\
            </tr>\
\
            <tr>\
                <td class='clist_ele'>\
                    River\
                </td>\
                <td class='clist_ele'>\
                    Solar Farm\
                </td>\
            </tr>\
\
            <tr>\
                <td class='clist_ele'>\
                    Stadium\
                </td>\
                <td class='clist_ele'>\
                    Storage Tank\
                </td>\
            </tr>\
\
            <tr>\
                <td class='clist_ele'>\
                Volcano\
                </td>\
                <td class='clist_ele'>\
                    Watercraft\
                </td>\
            </tr>\
\
        </table>\
    </div>\
</div>"


}