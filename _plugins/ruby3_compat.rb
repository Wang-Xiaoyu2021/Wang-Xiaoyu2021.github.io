# Ruby 3.x+ 移除了 Object#tainted? 等方法，而 Jekyll 3.9 / Liquid 4.0.3 在渲染时仍会调用它们。
# 本地预览时，请通过 RUBYOPT 预加载本文件（详见 README），以兼容新版 Ruby。
#
# 注意：GitHub Pages 线上构建处于 safe 模式，不会加载 _plugins，但线上 Ruby 环境已内置兼容处理，
# 因此本文件不影响线上部署。
unless Object.method_defined?(:tainted?)
  class Object
    def tainted?
      false
    end

    def taint
      self
    end

    def untaint
      self
    end

    def untrusted?
      false
    end

    def trust
      self
    end

    def untrust
      self
    end
  end
end
