const base = {
    get() {
        return {
            url : "http://localhost:8080/guanzhaungfeiyanfangkong/",
            name: "guanzhaungfeiyanfangkong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/guanzhaungfeiyanfangkong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "安康学院新型冠状病毒肺炎疫情防控专题网站"
        } 
    }
}
export default base
