console.log('block');

const blockItems = ['AIP', 'RG60289'];

const worksFilter = (work) => {
    workAttr = work.getElementsByClassName('__product_attributes')[0]?.getAttribute('value');
    if (!workAttr) return;
    for (i of blockItems) {
        if (workAttr.includes(i)) {
            work.remove();
            return;
        }
    }
};

const worksBlock = () => {
    var works = document.getElementsByClassName('n_worklist')[0];
    if (!works) return;
    var worksArr = works.getElementsByTagName('tbody').length == 1 ? Array.from(works.children[0].children) : Array.from(works.children);
    worksArr.forEach(worksFilter);
};

worksBlock();
