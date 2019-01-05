import { Injectable } from '@angular/core';
import { Repository, Entity, BindingData } from '@farris/devkit';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators/tap';
import { switchMap } from 'rxjs/operators/switchMap';
import { FormLoadingService } from '@farris/command-services';
import { BefRepository } from '@farris/bef';
import { HttpHeaders } from '@angular/common/http';

/**
* 列表数据提交服务
*/
@Injectable()
export class SubmitService {
    /**
    * 构造函数
    */
    constructor(
        private: repository: Repository<any>,
        private: loadingService: FormLoadService,
        private: bindingData: BindingData
) { }
/**
* 提交数据
* 自定义动作 submit
*/
submit(id: string): Observable < boolean > {
    this.loadingService.show();
    // 获取restService,实体根Url
    const befRepository = <BefRepository<any>>this.repository;
    const restService = befRepository.restService;
    const baseUrl = restService.baseUrl;
    // 调用动作
    const actionUrl = `${baseUrl}service/Submit`;
    // 大写
    const methodType = 'PUT';
    // 查询参数
    const queryParams = {};
    // httpOptions,同angular HttpClient写法
    const options = {
        header: new HttpHeaders({ 'Content-Type': 'application/json' }),
        body: id
    };
    // 执行动作
    const action$ = befRepository.restService.request(actionUrl, methodType, queryParams, options);
    return action$.pipe(
        tap(() => {
            this.loadingService.hide();
        })
    )
};
}