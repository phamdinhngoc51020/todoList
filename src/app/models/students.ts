export class student{

  private _id?: number | undefined;

  public get id(): number | undefined {
    return this._id;
  }
  public set id(value: number | undefined) {
    this._id = value;
  }

  private _sHoten?: string | undefined;
  public get sHoten(): string | undefined {
    return this._sHoten;
  }
  public set sHoten(value: string | undefined) {
    this._sHoten = value;
  }

  private _bGioitinh?: boolean | undefined;
  public get bGioitinh(): boolean | undefined {
    return this._bGioitinh;
  }
  public set bGioitinh(value: boolean | undefined) {
    this._bGioitinh = value;
  }

  private _tNgaysinh?: string | undefined;
  public get tNgaysinh(): string | undefined {
    return this._tNgaysinh;
  }
  public set tNgaysinh(value: string | undefined) {
    this._tNgaysinh = value;
  }
}
